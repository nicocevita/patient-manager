import React from 'react';
import { Formik, Form, Field } from 'formik';

const PatientForm = ({ initialValues, onSubmit }) => {
    const [uploadedImage, setUploadedImage] = React.useState(null);

  const handleImageUpload = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(uploadedImage)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit({...values, avatar: uploadedImage})}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 bg-white rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg appearance-none focus:shadow-outline-blue focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg appearance-none focus:shadow-outline-blue focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-bold mb-2">
              Website
            </label>
            <Field
              type="text"
              id="website"
              name="website"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg appearance-none focus:shadow-outline-blue focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
              Avatar
            </label>
            <Field
              type="file"
              id="photo"
              name="photo"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg appearance-none focus:shadow-outline-blue focus:outline-none focus:ring"
            />
          </div>

        {uploadedImage && (
            <div className="mb-4">
                <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="w-auto h-auto max-w-20 max-h-20"
                />
            </div>
        )}

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PatientForm;
