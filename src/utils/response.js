const response = {
    success: (res, message, data = null) => {
      return res.status(200).json({
        status: 'success',
        message: message,
        data: data,
      });
    },
  
    created: (res, message, data = null) => {
      return res.status(201).json({
        status: 'success',
        message: message,
        data: data,
      });
    },
  
    error: (res, message, statusCode = 400, errorDetails = null) => {
      return res.status(statusCode).json({
        status: 'error',
        message: message,
        errorDetails: errorDetails,
      });
    },
  };
  
  module.exports = response;