export default function HeaderImageUpload({ setHeaderImage }) {
  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setHeaderImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
    </div>
  );
}