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
    groupsCreated: [],
    groupsJoined: [],
    friends: [],
    photos: [], 
    gender: '',
    _id: ''
}

export let ImgCropperDataInitVals = {
    imgChangeEvent: undefined,
    uploadFor: '',
    id: '',
    profileType: ''
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

export let pageInitValues = {
    owner: '',
    followers: [],
    name: '',
    profilePicture: '',
    coverPicture: '',
    description: '',
    address: '',
    postsCreated: [],
    createdAt: '',
    _id: ''
}

export let postInitValues = {
    author: '',
    likes: [],
    comments: [],
    shares: [],
    text: '',
    image: '',
    belongsToPage: '', 
    createdAt: '',
    _id: ''
}