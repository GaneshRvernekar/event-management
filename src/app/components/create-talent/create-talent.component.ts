import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { talent } from '../talent.model';
import { AddtalentService } from '../addtalent.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { mimeType } from './mime-type-validators';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css'],
})
export class CreateTalentComponent implements OnInit, OnDestroy {
  isLoading = false;
  form: FormGroup;
  display='Success'
  private mode = 'create';
  imagePreview: string;
  talObj: talent;
  private talId: string | null | undefined;
  private authStatusSub: Subscription;

  constructor(
    public talentService: AddtalentService,
    public route: ActivatedRoute,
    public Aservice: AuthServiceService,
    private router:Router
  ) {}
  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  ngOnInit(): void {
    this.authStatusSub = this.Aservice.getAuthStatusListener().subscribe(
      (authStatus) => {
        this.isLoading = false;
      }
    );

    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      year: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      department: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      skill: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('talentId')) {
        this.mode = 'edit';
        this.talId = paramMap.get('talentId');
        this.isLoading = true;
        this.talentService.getTalent(this.talId).subscribe((talData) => {
          this.isLoading = false;
          this.talObj = {
            id: talData._id,
            name: talData.name,
            year: talData.year,
            department: talData.department,
            skill: talData.skill,
            imagePath: talData.imagePath,
            creator: talData.creator,
          };

          this.form.setValue({
            name: this.talObj.name,
            year: this.talObj.year,
            department: this.talObj.department,
            skill: this.talObj.skill,
            image: this.talObj.imagePath,
          });
        });
      } else {
        this.mode = 'create';
        this.talId = null;
      }
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    if (this.mode == 'create') {
      this.talentService.addTalent(
        'null',
        this.form.value.name,
        this.form.value.year,
        this.form.value.department,
        this.form.value.skill,
        this.form.value.image
      );
    } else {
      this.talentService.updateTalent(
        this.talId,
        this.form.value.name,
        this.form.value.year,
        this.form.value.department,
        this.form.value.skill,
        this.form.value.image
      );
    }

    this.form.reset();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
