import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatarprofile',
  templateUrl: './avatarprofile.component.html',
  styleUrls: ['./avatarprofile.component.scss']
})
export class AvatarprofileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const avatarImage = document.querySelector('.avatar-image img') as HTMLImageElement;
    const editIcon = document.querySelector('.edit-icon');
    const deleteIcon = document.querySelector('.delete-icon');
    let fileInput = document.querySelector('.file-input') as HTMLInputElement;

    if (editIcon) {
      editIcon.addEventListener('click', () => {
        // Código para cambiar la imagen
        fileInput.addEventListener('change', (event: Event) => {
          const file = (event.target as HTMLInputElement).files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              avatarImage.src = reader.result as string;
            };
            reader.readAsDataURL(file);
          }
        });
        fileInput.click();
      });
    }

    if (deleteIcon) {
      deleteIcon.addEventListener('click', () => {
        const confirmation = confirm('¿Estás seguro de que deseas eliminar este avatar?');
        if (confirmation) {
          const avatarContainer = document.querySelector('.avatar-image');
          if (avatarContainer) {
            avatarContainer.remove();
            const newFileInput = document.createElement('input');
            newFileInput.classList.add('file-input');
            newFileInput.type = 'file';
            avatarContainer.appendChild(newFileInput);
            fileInput = newFileInput;
          }
        }
      });
    }
  }
}
