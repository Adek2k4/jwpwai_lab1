'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import classes from './page.module.css';

export default function ShareMealPage() {
  const router = useRouter();
  const formRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState({ loading: false, message: '' });

  useEffect(() => {
    if (!selectedImage) {
      setPreview(null);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }
    setSelectedImage(file);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, message: '' });

    const formData = new FormData(event.target);
    const image = formData.get('image');

    if (!image || (typeof image === 'object' && !image.size)) {
      setStatus({ loading: false, message: 'Please add a meal image.' });
      return;
    }

    try {
      const res = await fetch('/api/meals', { method: 'POST', body: formData });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || 'Saving failed');
      }
      
      // Redirect to the newly created meal page
      if (data.slug) {
        router.push(`/meals/${data.slug}`);
      }
    } catch (err) {
      setStatus({ loading: false, message: err.message || 'Saving failed' });
    }
  }

  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>

          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>

          <div className={classes.imagePicker}>
            <p className={classes.imageLabel}>Meal image</p>
            <div className={classes.fileControls}>
              <label htmlFor="image" className={classes.fileButton}>
                Choose image
              </label>
              <span className={classes.fileName}>
                {selectedImage ? selectedImage.name : 'No file chosen'}
              </span>
            </div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className={classes.fileInput}
            />

            {preview && (
              <div className={classes.preview}>
                <img src={preview} alt="Selected meal preview" />
              </div>
            )}
          </div>

          <p className={classes.actions}>
            <button type="submit" disabled={status.loading}>
              {status.loading ? 'Saving...' : 'Share Meal'}
            </button>
          </p>
          {status.message && <p>{status.message}</p>}
        </form>
      </main>
    </div>
  );
}
