"use client"
import React, { useEffect, useState } from 'react'
import styles from "./adminSingleProduct.module.css"
import Image from "next/image"
interface ProductItem {
  title: string | null;
  description: string | null;
  // Add other properties as necessary
}

export default function SingleProduct({ params }: { params: { slug: string } }) {
  const [productItem, setProductItem] = useState<ProductItem | null>(null); // Initialize as null

  const productId = params.slug;
  console.log(productId);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: "GET"
        });

        const data = await response.json();

        setProductItem(data.product as ProductItem); // Type assertion
        console.log(data);
      } catch (error) {
        throw new Error("Error in admin Getting Single Product");
      }
    };
    getProduct();
  }, [productId]);

  if (!productItem) {
    return <div>Loading...</div>; // Render a loading state or spinner
  }

  return (
    <div className={styles.adminSingleProduct}>
      <h1 className={styles.mainHeading}>Product Information</h1>
      <div className={styles.form}>
        <div className={styles.form_control}>
          <label htmlFor="">Title</label>
          <input
            className={styles.inputElements}
            type="text"
            name=""
            value={productItem.title ?? ""}
            id=""
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">Description</label>
          <textarea
            className={styles.inputElements}
            name=""
            value={productItem.description ?? ""}
            id=""
          ></textarea>
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="men" selected>Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">SubCategory</label>
          <select name="" id="">
            <option value="shirts" selected>Shirts</option>
            <option value="bottoms">Bottoms</option>
            <option value="formals">Formals</option>
            <option value="skinCare">SkinCare</option>
            <option value="jackets">Jackets</option>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">Price</label>
          <input
            className={styles.inputElements}
            type="number"
            name=""
            value="12"
            id=""
          />
        </div>
        <div style={{ display: "flex", gap: "6px" }} className={styles.form_control}>
          <label htmlFor="">Variants/Sizes</label>

          <input className={styles.checkItem} type="checkbox" name="" id="small" />
          <label htmlFor="small">Small</label>

          <input className={styles.checkItem} type="checkbox" name="" id="medium" />
          <label htmlFor="medium">Medium</label>

          <input className={styles.checkItem} type="checkbox" name="" id="large" />
          <label htmlFor="large">Large</label>

          <input className={styles.checkItem} type="checkbox" name="" id="xl" />
          <label htmlFor="xl">XL</label>

          <input className={styles.checkItem} type="checkbox" name="" id="2xl" />
          <label htmlFor="2xl">2XL</label>
        </div>
        <div className={styles.form_control}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <button className={styles.updateButton}>Update</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}
