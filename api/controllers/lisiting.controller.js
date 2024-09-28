import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";
import mongoose from "mongoose";


export const createListing = async (req, res, next) =>{

try{
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);

}catch(error){
    next(error);
}

};


export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only delete your own listings!'));
    }
    try {
      await Listing.findByIdAndDelete(req.params.id);
      res.status(200).json('Listing has been deleted!');
    } catch (error) {
      next(error);
    }
  };




export const updateListing = async (req, res, next) => {
  const { id } = req.params;

  // Validate if the provided id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(errorHandler(400, 'Invalid Listing ID'));
  }

  try {
    // Find the listing by its id
    const listing = await Listing.findById(id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }

    // Check if the user is authorized to update this listing
    if (req.user.id !== listing.userRef.toString()) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }

    // Update the listing and return the updated version
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};
