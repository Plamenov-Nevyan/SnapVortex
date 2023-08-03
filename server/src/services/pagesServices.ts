import { ObjectId, Types } from "mongoose";
import Page from "../models/Page";
import UserSchema from "../models/User";
import { PageInterface } from "../types/Page";
import { FileProps } from "../types/FileProps";
const uploadFile = require('../utils/googleUpload')


export const createPage = async (pageData: PageInterface, userId: unknown) => {
    let [isPageExisting, user] = await Promise.all([
        Page.findOne({name: pageData.name}),
        UserSchema.findById(userId)
    ]) 

    if(!isPageExisting){
        pageData.owner = userId as Types.ObjectId
        let newPage = await Page.create({
            ...pageData
        })
        user?.pagesOwned.push(newPage._id)
        await user?.save()
        return newPage
    }
}

export const getPageProfile = async (pageId:string) => {
    let page = await Page.findById(pageId)
    return page
}

export const editPageData = async (editData: PageInterface, pageId: string) => {
    let page = await Page.findByIdAndUpdate(pageId, editData, {new: true})
    return page
}

export const updateCoverPicture = async (picture: FileProps | undefined, pageId: string) => {
    let [resp, page] = await Promise.all([
        await uploadFile(picture),
        await Page.findById(pageId)
    ])
    if(page instanceof Page){
        page.coverPicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await page.save()
        return page.coverPicture
    }
}

export const updateProfilePicture = async (picture: FileProps | undefined, pageId: string) => {
    let [resp, page] = await Promise.all([
        await uploadFile(picture),
        await Page.findById(pageId)
    ])
    if(page instanceof Page){
        page.profilePicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await page.save()
        return page.profilePicture
    }
}