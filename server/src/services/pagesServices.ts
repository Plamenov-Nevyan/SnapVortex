import { ObjectId, Types } from "mongoose";
import PageSchema from "../models/Page";
import UserSchema from "../models/User";
import { Page } from "../types/Page";
import { FileProps } from "../types/FileProps";
const uploadFile = require('../utils/googleUpload')


export const createPage = async (pageData: Page, userId: unknown) => {
    let [isPageExisting, user] = await Promise.all([
        PageSchema.findOne({name: pageData.name}),
        UserSchema.findById(userId)
    ]) 

    if(!isPageExisting){
        pageData.owner = userId as Types.ObjectId
        let newPage = await PageSchema.create({
            ...pageData
        })
        user?.pagesOwned.push(newPage._id)
        await user?.save()
        return newPage
    }
}

export const getPageProfile = async (pageId:string) => {
    let page = await PageSchema.findById(pageId)
    return page
}

export const editPageData = async (editData: Page, pageId: string) => {
    let page = await PageSchema.findByIdAndUpdate(pageId, editData, {new: true})
    return page
}

export const updateCoverPicture = async (picture: FileProps | undefined, pageId: string) => {
    let [resp, page] = await Promise.all([
        await uploadFile(picture),
        await PageSchema.findById(pageId)
    ])
    if(page instanceof PageSchema){
        page.coverPicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await page.save()
        return page.coverPicture
    }
}

export const updateProfilePicture = async (picture: FileProps | undefined, pageId: string) => {
    let [resp, page] = await Promise.all([
        await uploadFile(picture),
        await PageSchema.findById(pageId)
    ])
    if(page instanceof PageSchema){
        page.profilePicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await page.save()
        return page.profilePicture
    }
}