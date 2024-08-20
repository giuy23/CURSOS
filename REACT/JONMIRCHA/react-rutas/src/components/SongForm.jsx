import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      setIsDisabled(true);
      alert("Datos Incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(true); // Después de enviar el formulario, deshabilita el botón
    handleSaveSong();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ...resto del formulario */}
        <input
          type="submit"  {/* Cambiado a type "submit" para que se ejecute handleSubmit */}
          value={"Guardar Canción"}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default SongForm;
