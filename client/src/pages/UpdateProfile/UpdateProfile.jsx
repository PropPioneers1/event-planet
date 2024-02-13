import { SiSpinrilla } from "react-icons/si";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const UpdateProfile = () => {
	const { user, loading } = useAuth();
	const [imagePreview, setImagePreview] = useState(null);

	const [gender,setGender] = useState("")

	const uploadImage = (event) => {
		let imageLink = URL.createObjectURL(event.target.files[0]);
		setImagePreview(imageLink);
	};

	

	const hadleUpdateProfile = (e) => {
		e.preventDefault();
		const form = e.target;
		const image = form.imageFile.files[0];
		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;
		const language = form.language.value;
		const permanent = form.permanent.value;

		console.log({ image, name, phone, present, permanent });
	};

	return (
		<div className=" min-h-screen ">
			<div className="lg:w-3/4 mx-auto bg-white px-5 py-5">
				<h1 className="text-2xl text-center font-semibold font-title mt-5">
					Edit Your Profile Data
				</h1>
				<hr className="" />

				<form onSubmit={hadleUpdateProfile} className="py-5 font-title">
					{/* Image section code */}
					<div className="w-full flex items-center justify-center">
						<label
							htmlFor="image-file"
							className=" rounded-full border h-[120px] w-[120px] text-center "
						>
							<input
								onChange={uploadImage}
								name="imageFile"
								className="hidden"
								type="file"
								id="image-file"
							/>
							<div
								className="flex flex-col items-center justify-center rounded-full h-[120px] w-[120px]"
								style={{
									backgroundImage: `url("${imagePreview}")`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								{!imagePreview && (
									<img
										src="https://i.ibb.co/chQCG2h/upload-icon.png"
										alt="Image Preview"
										className="object-fill h-[50px] w-[50px]"
									/>
								)}
								<p
									className={
										imagePreview ? "hidden" : "block"
									}
								>
									upload image
								</p>
							</div>
						</label>
					</div>

					{/* Above image part */}
					<div className="md:flex md:px-24">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text text-lg">
									Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter Your name"
								className="input input-bordered focus:outline-none"
								name="name"
								value={user?.displayName}
								readOnly
							/>
						</div>
					</div>

					<div className="md:flex md:px-24">
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text  text-lg">
									Email
								</span>
							</label>
							<input
								type="email"
								placeholder="Enter Your Display Name"
								className="input input-bordered focus:outline-none"
								name="email"
								value={user?.email}
								readOnly
							/>
						</div>
						<div className="form-control md:ml-4 md:w-1/2">
							<label className="label">
								<span className="label-text  text-lg">
									Phone Number
								</span>
							</label>
							<input
								type="tel"
								placeholder="Enter Your Phone Number"
								className="input input-bordered focus:outline-none"
								name="phone"
							/>
						</div>
					</div>
					<div className="md:flex md:px-24">
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text  text-lg">
									Gender
								</span>
							</label>
							<select 
							className="select select-bordered w-full focus:outline-none"
							onChange={(e) => setGender(e.target.value)}
							defaultValue={gender}
							
							>
								<option value="" disabled >Select Gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="others">Others</option>
							</select>
						</div>
						<div className="form-control md:ml-4 md:w-1/2">
							<label className="label">
								<span className="label-text text-lg">
									language
								</span>
							</label>
							<input
								type="text"
								placeholder="Your Language"
								className="input input-bordered focus:outline-none"
								name="language"
							/>
						</div>
					</div>
					{/* <div className="form-control md:px-24  w-full">
						<label className="label">
							<span className="label-text font-rancho text-xl">
								Coffee Photo
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter coffee Photo Url"
							className="input input-bordered"
							name="photo"
						/>
					</div> */}
					<div className="w-3/4 mx-auto py-5 mt-5">
						<button type="submit" className="button w-full">
							{loading ? (
								<SiSpinrilla className="animate-spin m-auto" />
							) : (
								"SIGN UP"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProfile;
