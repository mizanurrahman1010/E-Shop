import Header from './Header'
import { useState } from 'react'
function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    async function AddProduct() {
        console.warn(name, price, file, description)
        const formData = new FormData();
        formData.append('file,file');
        formData.append('price,price');

        formData.append('name,name');
        formData.append('description,description');
        let result = await fetch ("http://localhost:8000/api/addproduct", {

        });
        alert("data saved")



    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" /> <br />
                <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} placeholder="file" /> <br />
                <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="price" /> <br />
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Description" /> <br />
                <button onClick={AddProduct} className="btn btn-primary">AddProduct</button>

                <h1>Add Product</h1>
            </div>
        </div>
    )
}
export default AddProduct;