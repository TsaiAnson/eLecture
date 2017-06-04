exports.index = function (request, response, next) {
    response.status(200).json({message: 'Success'});
};

exports.notFound = function (request, response, next) {
    response.status(404).json({message: 'Not Found'});
};
