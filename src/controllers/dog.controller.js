var Dog = require('../models/dog.model')

/**
 * List Dog
 * @params req: the request itself
 * @params h: a toolkit response of hapi
 */
exports.list = (req, h) => {
    return Dog.find({}).exec().then((dog) => {
        return { dogs: dog }
    }).catch((error) => {
        return { error: error }
    })
}

/** Get a dog by Id */
exports.get = (req, h) => {
    return Dog.findById(req.params.id).exec().then((dog) => {
        if (!dog)
            return { message: 'Dog not found' }

        return { dog: dog }
    }).catch((error) => {
        return { error: error }
    })
}

/** Create a dog */
exports.post = (req, h) => {
    const newDog = {
        name: req.payload.name,
        breed: req.payload.breed,
        age: req.payload.age,
        image: req.payload.image
    }

    return Dog.create(newDog).then((dog) => {
        return { message: 'Dog creates successfully' }
    }).catch((error) => {
        return { error: error }
    })
}

/** Update a dog */
exports.put = (req, h) => {
    return Dog.findById(req.params.id).exec().then((dog) => {
        if (!dog)
            return { message: 'Dog not found' }

        dog.name = req.payload.name,
        dog.breed = req.payload.breed,
        dog.age = req.payload.age,
        dog.image = req.payload.image

        dog.save(dogData) //* Where is defined dogData
    }).then((data) => {
        return { message: 'Dog data updated successfully' }
    }).catch((error) => {
        return { error: error }
    })
}

/** Delete a dog */
exports.remove = (req, h) => {
    return Dog.findById(req.params.id).exec((error, dog) => {
        if (error) return { dberror: error } //* where is dberror property
        if (!dog) return { message: 'Dog not found' }

        dog.remove((error) => {
            if (error) return { dberror: error }

            return { success: true }
        })
    })
}
