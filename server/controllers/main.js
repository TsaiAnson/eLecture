exports.notFound = function (request, response, next) {
    response.status(404).json({message: 'Not Found', uri: request.params['uri']});
};
