"use client"
import { useState ,ChangeEvent,useRef} from "react"
 import styles from "./addProduct.module.css"
 export default function AddProduct() {

  // -->This is the Interface of Initial FormValues or credentials
  interface FormValues{
    title:string,
    description:string,
    price:number,
    category:string,
    subCategory:string,
    sizes:Array<string>,
    images:File[] 
  }
  // -->These are the Initial FormValues 
  const initialFormValues: FormValues = {
    title: "",
    description: "",
    price: 0,
    category: "",
    subCategory: "",
    sizes: [],
    images: [],
  };

  // -->This the useState of Credentials 
   const [credentials,setCredentials]=useState<FormValues>(initialFormValues)
  
  //  -->This is the Helper to handling the reset functionality of the Image Files
  const fileInputRefs = useRef<HTMLInputElement[]>([]);

  const setFileInputRef = (el: HTMLInputElement | null) => {
    if (el && !fileInputRefs.current.includes(el)) {
      fileInputRefs.current.push(el);
    }
  };
  //-->Main or  General handleChange Function
  const handleChange=(e:any)=>{

    setCredentials({...credentials,[e.target.name]:e.target.value})

  }

//-->  handleChange function to handle Sizes
  const handleSizes=(e:any)=>{
     

    let size:boolean=credentials.sizes.includes(e.target.value)

    let value:string=e.target.value
    if(size){
      setCredentials({...credentials,sizes:credentials.sizes.filter((s:any)=>s!==value)})
    }
    else{
      setCredentials({ ...credentials, sizes: [...credentials.sizes, value] });
    }

    
    
  }
 //-->Main  Function to reset form fields
 const resetForm = () => {
  setCredentials(initialFormValues);

  // Reset file inputs
  fileInputRefs.current.forEach((fileInput) => {
    if (fileInput) {
      fileInput.value = "";
    }
  });

  // Uncheck all sizes checkboxes
  const checkboxes = document.querySelectorAll('input[name="sizes"]');
  checkboxes.forEach((checkbox) => {
    (checkbox as HTMLInputElement).checked = false;
  });
};

  //-->Main handleChange function for Pictures !!! important feature
  const handlePictures = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
     if (files) {
      setCredentials((prevCredentials) => {
         const updatedImages = [...prevCredentials.images, ...Array.from(files)];
         return {
          ...prevCredentials,
          images: updatedImages,
        };
      });
    }
  };
 

  //--> Main Submit Handle Click Function It also include Api
  const handleCLick=async(e:any)=>{
    e.preventDefault()

    const form=new FormData()

    form.append("title",credentials.title);
    form.append("description",credentials.description);
    form.append("price",credentials.price.toString());
    form.append("category",credentials.category);
    form.append("subCategory",credentials.subCategory);
     credentials.sizes.map((item,i)=>(
      form.append("sizes",item)
    ))
    credentials.images.forEach(image => form.append("images", image));

     const res=await fetch(`/api/products`,{
      "method":"POST",
      body:form
    })

    let data=await res.json()
    resetForm()
  }
 
  
  return (
    <div className={styles.addProduct}>
         <div className={styles.container}>
          <form className={styles.form} action="" onSubmit={handleCLick}>

            {/* Title of the Product */}
            <div className={styles.form_control}>
              <label htmlFor="">Title</label>
              <input className={styles.inputElements} type="text" name="title" onChange={(e)=>{handleChange(e)}} value={credentials.title} id="" />
            </div>

            {/* Description of the Product */}
            <div className={styles.form_control}>
              <label htmlFor="">Description</label>
              <input className={styles.inputElements} type="text" name="description" onChange={(e)=>{handleChange(e)}} value={credentials.description} id="" />
            </div>
            {/* Price of the Product */}
            <div className={styles.form_control}>
              <label htmlFor="">Price</label>
              <input className={styles.inputElements} type="number" name="price" onChange={(e)=>{handleChange(e)}} value={credentials.price} id="" />
            </div>
             {/* Category of the Product */}

             <div className={styles.form_control}>
              <label htmlFor="">Category</label>
              <select name="category" value={credentials.category} onChange={(e)=>{handleChange(e)}} id="">
                <option disabled value="">Select the Category</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
             </div>
             {/* Sub Category */}
             <div className={styles.form_control}>
              <label htmlFor="">SubCategory</label>
              <select name="subCategory" value={credentials.subCategory} onChange={(e)=>{handleChange(e)}} id="">
                <option disabled value="">Select the SubCategory</option>
                <option value="shirts">Shirts</option>
                <option value="bottoms">Bottoms/Pents</option>
                <option value="shoes">Shoes</option>
                <option value="formals">Formals</option>
                <option value="jackets">Jackets</option>
                <option value="skinCare">SkinCare</option>
               </select>
             </div>

             {/* Sizes */}
             <div className={styles.form_control}>
              <label htmlFor="">Available Sizes</label>
              <div className={styles.singleSize}>
                 <input type="checkbox" name="sizes" value="small" id="small" onChange={(e)=>{handleSizes(e)}} />
                 <label htmlFor="small">Small</label>
              </div>
              <div className={styles.singleSize}>
                 <input type="checkbox" name="sizes" value="medium" id="medium" onChange={(e)=>{handleSizes(e)}} />
                 <label htmlFor="medium">Medium</label>
              </div>
              <div className={styles.singleSize}>
                 <input type="checkbox" name="sizes" value="large" id="large" onChange={(e)=>{handleSizes(e)}} />
                 <label htmlFor="large">Large</label>
              </div>
              <div className={styles.singleSize}>
                 <input type="checkbox" name="sizes" value="xl" id="xl" onChange={(e)=>{handleSizes(e)}} />
                 <label htmlFor="xl">XL</label>
              </div>
              <div className={styles.singleSize}>
                 <input type="checkbox" name="sizes" value="2xl" id="2xl" onChange={(e)=>{handleSizes(e)}} />
                 <label htmlFor="2xl">2XL</label>
              </div>
              <div className={styles.singleSize}>
                 <input type="checkbox" name="sizes" value="3xl" id="3xl" onChange={(e)=>{handleSizes(e)}} />
                 <label htmlFor="3xl">3XL</label>
              </div>

             </div>

             {/* Images */}
             <div className={styles.form_control}>
            <input
              type="file"
              name="images"
              ref={setFileInputRef}
              onChange={handlePictures}
            />
            <input
              type="file"
              name="images"
              ref={setFileInputRef}
              onChange={handlePictures}
            />
            <input
              type="file"
              name="images"
              ref={setFileInputRef}
              onChange={handlePictures}
            />
          </div>

             <button className={styles.submitButton} type="submit">Submit</button>
          </form>
         </div>
      
    </div>
  )
}
