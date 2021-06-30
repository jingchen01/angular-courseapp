import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: Course;
  selectedCourse: Course;

  constructor() {
    this.course = new Course;
    this.selectedCourse = new Course;
  }

  ngOnInit(): void {
  }

}
