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

export let createGroupInitVals = {
    name: '',
    isPrivate: false,
    description: '',
    rule:'',
    rules: []
  }

export let createPageInitVals = {
    name : '',
    description: '',
    address: ''
  }

export let groupInitValues = {
    owner : '',
    name: '',
    description: '',
    isPrivate: false,
    postsCreated: [],
    members: [],
    profilePicture: '',
    coverPicture: '',
    rules: [],
    _id: ''
}