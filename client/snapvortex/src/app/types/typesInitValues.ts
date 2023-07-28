export let UserInitValues = {
    username: '',
    email: '',
    password: '',
    about: {
        workplace: '',
        address: '',
        description: '',
        personalWebsite: {
            url: '',
            preview: ''
        }
    },
    profilePicture: '',
    coverPicture: '',
    createdPosts: [],
    likedPosts: [],
    sharedPosts: [],
    commentedPosts: [],
    pagesOwned: [],
    pagesFollowed: [],
    photos: [], 
    gender: ''
}

export let ImgCropperDataInitVals = {
    imgChangeEvent: undefined,
    uploadFor: '',
    id: ''
}