import { useState } from "react";


const CreateTheme = () => {

    const [eventCategory, setEventCategory] = useState("");
    const [themeCategory, setThemeCategory] = useState("");

    const [stageImagePreview, setStageImagePreview] = useState(null);
    const [audienceImagePreview, setAudienceImagePreview] = useState(null);
    const [decorationImagePreview, setDecorationImagePreview] = useState(null);

    const uploadStageImage = (event) => {
        console.log("working");
        let stageImageLink = URL.createObjectURL(event.target.files[0]);
        setStageImagePreview(stageImageLink)

    }
    const uploadAudienceImage = (event) => {
        console.log("working");
        let audienceImageLink = URL.createObjectURL(event.target.files[0]);
        setAudienceImagePreview(audienceImageLink)

    }
    const uploadDecorationImage = (event) => {
        console.log("working");
        let decorationImageLink = URL.createObjectURL(event.target.files[0]);
        setDecorationImagePreview(decorationImageLink)

    }


    const handleCreateTheme = (e)=>{
        e.preventDefault();
        const form = e.target;
        const stageImage = form.stageImage.files[0];
        const audienceImage = form.audienceImage.files[0];
        const decorationImage = form.decorationImage.files[0];

        const theme = {
            stageImage,
            audienceImage,
            decorationImage,
            eventCategory,
            themeCategory
        }
        console.log(theme);
    }

    return (
        <div className=" bg-neutral min-h-screen">
           

            <div className="bg-white p-10">
            <h2 className="text-2xl font-bold text-center mb-8">Create Theme</h2>
                <form onSubmit={handleCreateTheme}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Stage Image */}
                    <div  className="w-full min-h-[150px] bg-white flex items-center justify-center">
                        <label
                            htmlFor="stage-image"
                            className="min-h-40 w-full border text-center rounded-2xl">
                            <input
                                onChange={uploadStageImage}
                                name='stageImage'
                                className="hidden"
                                type="file" id="stage-image" />
                            <div className="flex flex-col items-center justify-center h-64"
                                style={{ backgroundImage: `url("${stageImagePreview}")`, backgroundSize: "cover", backgroundPosition: "center" }} >
                                {
                                    !stageImagePreview &&
                                    <img
                                        src="https://i.ibb.co/chQCG2h/upload-icon.png" alt="Image Preview"
                                        className='object-fill h-[100px] w-[100px]'
                                    />
                                }
                                <p
                                    className={stageImagePreview ? "hidden" : "block"}>
                                    Click Here To Upload Stage Image
                                </p>
                            </div>
                        </label>
                    </div>
                    <div  className="w-full min-h-[150px] bg-white flex items-center justify-center">
                        <label
                            htmlFor="audience-image"
                            className="min-h-40 w-full border text-center rounded-2xl">
                            <input
                                onChange={uploadAudienceImage}
                                name='audienceImage'
                                className="hidden"
                                type="file" id="audience-image" />
                            <div className="flex flex-col items-center justify-center h-64"
                                style={{ backgroundImage: `url("${audienceImagePreview}")`, backgroundSize: "cover", backgroundPosition: "center" }} >
                                {
                                    !audienceImagePreview &&
                                    <img
                                        src="https://i.ibb.co/chQCG2h/upload-icon.png" alt="Image Preview"
                                        className='object-fill h-[100px] w-[100px]'
                                    />
                                }
                                <p
                                    className={audienceImagePreview? "hidden" : "block"}>
                                    Click Here To Upload Audience Image
                                </p>
                            </div>
                        </label>
                    </div>
                    <div  className="w-full min-h-[150px] bg-white flex items-center justify-center">
                        <label
                            htmlFor="decoration-image"
                            className="min-h-40 w-full border text-center rounded-2xl">
                            <input
                                onChange={uploadDecorationImage}
                                name='decorationImage'
                                className="hidden"
                                type="file" id="decoration-image" />
                            <div className="flex flex-col items-center justify-center h-64"
                                style={{ backgroundImage: `url("${decorationImagePreview}")`, backgroundSize: "cover", backgroundPosition: "center" }} >
                                {
                                    !decorationImagePreview &&
                                    <img
                                        src="https://i.ibb.co/chQCG2h/upload-icon.png" alt="Image Preview"
                                        className='object-fill h-[100px] w-[100px]'
                                    />
                                }
                                <p
                                    className={decorationImagePreview? "hidden" : "block"}>
                                    Click Here To Upload Audience Image
                                </p>
                            </div>
                        </label>
                    </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-4 my-8">
                        {/* Select for Event Category */}
                        <select
                            className="select select-bordered w-full my-2 focus:border-none"
                            onChange={(e) => setEventCategory(e.target.value)}
                            defaultValue={eventCategory}
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
                        {/* Select for theme category */}
                        <select
                            className="select select-bordered w-full my-2 focus:border-none"
                            onChange={(e) => setThemeCategory(e.target.value)}
                            defaultValue={themeCategory}
                            required
                        >
                            <option disabled value="">Select Theme Category</option>
                            <option value="Elegant">Elegant</option>
                            <option value="Classic">Classic</option>
                            <option value="Casual">Casual</option>
                        </select>

                    </div>
                    <button 
                    type="submit"
                    className="bg-primary w-full text-white font-bold btn"
                    >
                        Create
                    </button>

                </form>

            </div>
        </div>
    );
};

export default CreateTheme;