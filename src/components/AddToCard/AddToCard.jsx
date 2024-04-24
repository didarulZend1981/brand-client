

const AddToCard = () => {
  const handleAddToPost = event => {
    //  console.log("dddar");
    event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // console.log(name,quantity);

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);


  }

  return (
    <div className="bg-[#F4F3F0] p-24 w-1/2 mx-auto rounded-2xl mt-10 mb-10">
    <h2 className="text-3xl font-extrabold text-center">Add a Coffee</h2>
    <form onSubmit={handleAddToPost} >
        <div className="flex">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                </label>
            </div>
        </div>
       
        <div className="flex">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className="flex">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
        <input type="submit" value="Add Coffee" className="btn btn-black bg-sky-500 text-[white] hover:bg-sky-700 w-full mt-4"/>
    </form>
</div>
  );
};

export default AddToCard;