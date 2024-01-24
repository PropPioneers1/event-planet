import { useState } from 'react';


const CreateBlog = () => {

    const [imagePreview, setImagePreview] = useState(null)

    const uploadImage = (event) => {
        console.log("working");
        let imageLink = URL.createObjectURL(event.target.files[0]);
        setImagePreview(imageLink)

    }

    const handleBlog = (event) => {
        event.preventDefault()
        const form = event.target;
        const description = form.description.value;
        const image = form.imageFile.files[0];
        console.log({ description, image });
    }

    return (
        <div className=" flex justify-center items-center">
            <div className="w-[700px] border p-4">
                <h2 className="text-3xl font-bold text-center border-b py-2">Create Blog</h2>
                <div className="avatar flex items-center gap-2 py-2">
                    <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <p className="text-xl">John Smith</p>
                </div>
                <form onSubmit={handleBlog} className="w-full h-full ">
                    <input type="text" name='description' placeholder="What's on your mind, John?" className="input px-0 w-full mb-6" />
                    <div className="w-full min-h-[300px] flex items-center justify-center">
                        <label htmlFor="image-file" className="min-h-64 w-full border p-8 text-center rounded-2xl">
                            <input onChange={uploadImage} name='imageFile' className="hidden" type="file" id="image-file" />
                            <div className="flex flex-col items-center ">
                                <img src={imagePreview ? imagePreview : "https://i.ibb.co/chQCG2h/upload-icon.png"} alt="" />
                                <p className={imagePreview? "hidden" : "block"}>Drag and Drop or click here to upload image</p>
                            </div>
                        </label>
                    </div>
                    <div className='flex  justify-center'>
                        <button type='submit' className='btn w-full bg-primary text-white mt-6'> Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;