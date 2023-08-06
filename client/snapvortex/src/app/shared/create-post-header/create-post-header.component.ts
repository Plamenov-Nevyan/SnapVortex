import { Component, Input, ViewChild, ElementRef, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { FeelingsData } from 'src/app/types/Feelings';
import { SelectedFeelingDirective } from '../feeling-emojis/selected-feeling.directive';
import { PostCreateData } from 'src/app/types/Post';

@Component({
  selector: 'app-create-post-header',
  templateUrl: './create-post-header.component.html',
  styleUrls: ['./create-post-header.component.css']
})
export class CreatePostHeaderComponent implements OnInit {
  @ViewChild("feelingContainer") divFeeling: ElementRef = {} as ElementRef
  showFeelingEmojis: boolean = false
  @Input() profilePicture: string = ''
  @Input() posterId: string = ''
  @Input() posterType: string = ''
  @Input() posterName: string = ''
  postImgPreviewUrl: string = ''
  postData: PostCreateData = {
    text: '',
    image: null,
    feeling: ''
  }
  // get feelingSvg(){return this.selectedFeeling.feelingGet}
  feelingSvg: ElementRef = {} as ElementRef
  
  constructor(
    private postServices: PostsService, 
    private modalInteractions: ModalInteractionsService,
    private selectedFeeling: SelectedFeelingDirective,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
    ){
    }
  ngOnInit(): void {
    this.selectedFeeling.feelingSubject.subscribe({
      next:(feelingSvgReceived) => {
        this.feelingSvg = feelingSvgReceived
        if(Object.values(this.feelingSvg).length > 0){
          while(this.divFeeling.nativeElement.firstChild){
            this.renderer.removeChild(this.divFeeling.nativeElement, this.divFeeling.nativeElement.lastChild)
          }
          const para = this.document.createElement('p')
          const h5 = this.document.createElement('h5')
          h5.innerText = `X`
          h5.style.marginLeft = 'auto'
          h5.style.cursor = 'pointer'
          h5.addEventListener('click', () => {
            while(this.divFeeling.nativeElement.firstChild){
              this.renderer.removeChild(this.divFeeling.nativeElement, this.divFeeling.nativeElement.lastChild)
            }
          })
          para.innerText = `${this.posterName} is feeling ${this.feelingSvg.nativeElement.id}`
          this.postData.feeling = this.feelingSvg.nativeElement.id
          
          this.feelingSvg.nativeElement.style.maxWidth = '3em'
          this.feelingSvg.nativeElement.style.maxHeight = '3em'
          this.renderer.appendChild(this.divFeeling.nativeElement, para)
          this.renderer.appendChild(this.divFeeling.nativeElement, this.feelingSvg.nativeElement)
          this.renderer.appendChild(this.divFeeling.nativeElement, h5)
        }
      }
    })
  }
  onPost(){
    this.postImgPreviewUrl = ''
    this.postServices.createPost(this.posterId, this.posterType, this.postData.feeling, this.postData.text, this.postData.image)
    this.postData = {
      text: '',
      feeling: '',
      image: null,
    }
  }

  onPostChange(event: Event){
    if(event.target instanceof HTMLTextAreaElement){
      this.postData.text = event.target.value
    }
  }

  onSelectImage(event: Event){
    if(event.target instanceof HTMLInputElement){
      if(event.target.files instanceof FileList){
        this.postData.image = event.target.files[0]
        let fileReader = new FileReader()
        fileReader.onload = () => {
          this.postImgPreviewUrl = fileReader.result as string
        }
        fileReader.readAsDataURL(this.postData.image)
      }
    }
  }

  onRemovePreviewImg(){
    this.postData.image = null
    this.postImgPreviewUrl = ''
  }

  onShowEmojis(){
    this.showFeelingEmojis ? this.showFeelingEmojis = false : this.showFeelingEmojis = true
  }

  onCloseTab(){
      this.onShowEmojis()
  }
}
