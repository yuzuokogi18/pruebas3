import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../components/services/posts.service';
import { IPosts } from '../components/models/iposts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postsService: PostsService) {
    this.postForm = this.fb.group({
      userId: [1, Validators.required],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPost: IPosts = this.postForm.value;
      this.postsService.postPosts(newPost).subscribe(
        response => {
          console.log('Post creado:', response);
          this.postForm.reset();
        },
        error => {
          console.error('Error al crear el post:', error);
        }
      );
    }
  }
}
