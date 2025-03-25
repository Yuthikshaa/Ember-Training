import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend();

const Classroom = EmberObject.extend({
    students: null, 

    sortedStudents: computed('students.[]', function() {
        return this.get('students').sort();
    }),

    addStudent(studentName) {
        this.get('students').pushObject(studentName);
        console.log(classroom.get('sortedStudents')); 
    },

    removeStudent(studentName) {
        this.get('students').removeObject(studentName);
        console.log(classroom.get('sortedStudents'));
    }
});

let classroom = Classroom.create({
    students: ['Alice', 'Charlie', 'Bob'] 
});

console.log('Students:', classroom.get('students'));

console.log('Sorted Students:', classroom.get('sortedStudents')); 

classroom.addStudent('David');
classroom.removeStudent('Charlie');
