import React, { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "1",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "attenuation_level" ? Number(value) : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="tagline"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Tagline:
        </label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="description"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "100px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="first_brewed"
          style={{ display: "block", marginBottom: "5px" }}
        >
          First Brewed:
        </label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="brewers_tips"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Brewer's Tips:
        </label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="attenuation_level"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Attenuation Level:
        </label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="contributed_by"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Contributed By:
        </label>
        <input
          type="text"
          id="contributed_by"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          display: "block",
          width: "100%",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Beer
      </button>
    </form>
  );
}

export default AddBeerPage;
