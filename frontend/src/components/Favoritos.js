// import Swal from "sweetalert2";

// const handleChangeFavStatus = (isFav, pubId, userId) => {
//   let url = "http://localhost:5000/favoritos";

//   const formData = new FormData();

//   formData.append("userId", userId);
//   formData.append("pubId", pubId);

//   let method = isFav ? "DELETE" : "POST";

//   fetch(url, {
//     method: method,
//     body: formData,
//     credentials: "include",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       cargarListadoProductos();

//       Swal.fire({
//         title: data.message,
//         icon: "success",
//       });
//     });
// };
