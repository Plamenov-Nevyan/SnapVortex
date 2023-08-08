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
    owner : {
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
    },
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

export let postInitValues = {
    author: UserInitValues,
    likes: [],
    comments: [],
    shares: [],
    text: '',
    image: '',
    belongsToPage: '', 
    belongsToGroup: '',
    createdAt: '',
    _id: ''
}

export let commentInitValues = {
    text: '',
    image: '',
    author: UserInitValues,
    likes: [],
    replies: [],
    belongsToPost: '',
    createdAt: '',
    _id: ''
}

export let replyInitValues = {
    text: '',
    image: '',
    author: UserInitValues,
    likes: [],
    belongsToComment: '',
    createdAt: '',
    _id: ''
}

export let notificationInitValues = {
    notificationType: '',
    receiver: '',
    sender: UserInitValues
}