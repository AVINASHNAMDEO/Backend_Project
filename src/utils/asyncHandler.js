const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((next) => next(err))

    }
}

export  {asyncHandler}





// const asyncHandler = (controller) => async (req, res, next) => {
//     try {
//         await controller(req, res, next);
//     } catch (error) {
//         res.status(error.code ||500).json(
//             {
//             success: false,
//             message: error.message
//             });
//         next(error);
//     }
// };



