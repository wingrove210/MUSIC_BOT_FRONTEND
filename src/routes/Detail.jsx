import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Импортируем useParams

export default function Detail() {
  const { id } = useParams(); // Получаем ID из URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://patriot-music.online/api/tracks/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка при загрузке деталей товара");
        setLoading(false);
        console.log(err)
      });
  }, [id]); // ID меняется, если URL меняется

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p><strong>Artist:</strong> {product.artist}</p>
      <p><strong>Duration:</strong> {product.duration}</p>
      <p><strong>Release Date:</strong> {product.release_date}</p>
      <p><strong>Album:</strong> {product.album}</p>
      <p><strong>Genre:</strong> {product.genre}</p>
      <audio controls className="w-full mt-4">
        <source src={`https://patriot-music.online/api/${product.url}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Добавим другие детали товара */}
    </div>
  );
}
