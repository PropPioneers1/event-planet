import { useState } from 'react';


const CreateBlog = () => {

    const [imagePreview, setImagePreview] = useState(null);

    const [category, setCategory] = useState("")

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
        console.log({ description, image, category });
    }

    return (
        <div className=" min-h-screen flex justify-center items-center bg-neutral">
            <div className="w-[500px] border p-4 bg-white">
                <h2 className="text-3xl font-bold text-center border-b py-2">Create Blog</h2>
                {/* User logo and name */}
                <div className="avatar flex items-center gap-2 py-2">
                    <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <p className="text-xl">John Smith</p>
                </div>
                <form onSubmit={handleBlog} >
                    <input
                        type="text"
                        name='description'
                        placeholder="What's on your mind, John?"
                        className="input px-0 w-full mb-6 focus:outline-none focus:border-none" />
                        {/* Select image and preview */}
                    <div  className="w-full min-h-[150px] flex items-center justify-center">
                        <label
                            htmlFor="image-file"
                            className="min-h-40 w-full border text-center rounded-2xl">
                            <input
                                onChange={uploadImage}
                                name='imageFile'
                                className="hidden"
                                type="file" id="image-file" />
                            <div className="flex flex-col items-center justify-center h-64"
                                style={{ backgroundImage: `url("${imagePreview}")`, backgroundSize: "cover", backgroundPosition: "center" }} >
                                {
                                    !imagePreview &&
                                    <img
                                        src="https://i.ibb.co/chQCG2h/upload-icon.png" alt="Image Preview"
                                        className='object-fill h-[100px] w-[100px]'
                                    />
                                }
                                <p
                                    className={imagePreview ? "hidden" : "block"}>
                                    Drag and Drop or click here to upload image
                                </p>
                            </div>
                        </label>
                    </div>
                    {/* Category */}
                    <select
                        className="select select-bordered w-full my-4 focus:border-none"
                        onChange={(e) => setCategory(e.target.value)}
                        defaultValue={category}
                        required
                    >
                        <option disabled value="">Select Event Category</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="Sport">Sports</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Food Festival">Food Festival</option>
                        <option value="Innovation Showcase">Innovation Showcase</option>
                    </select>
                    <div className='flex  justify-center'>
                        <button
                            type='submit'
                            className='btn w-full bg-primary text-white mt-6'>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;