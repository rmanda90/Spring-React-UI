package com.mpk.samples.SpringReactUI.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mpk.samples.SpringReactUI.entity.Student;
import com.mpk.samples.SpringReactUI.repository.StudentRepository;

@RestController("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

	@Autowired
	StudentRepository studentRepository;

	@GetMapping("/students")
	public List<Student> findStudents() {
		return studentRepository.findAll();
	}

	@PostMapping("/students")
	Student newStudent(@RequestBody Student newStudent) {
		return studentRepository.save(newStudent);
	}

	// Single item
	@GetMapping("/students/{id}")
	Optional<Student> one(@PathVariable Long id) {
		return studentRepository.findById(id);
	}

	@PutMapping("/students/{id}")
	Student replaceStudent(@RequestBody Student newStudent, @PathVariable Long id) {

		return studentRepository.findById(id).map(student -> {
			student.builder().firstName(newStudent.getFirstName()).lastName(newStudent.getLastName())
					.emailId(newStudent.getEmailId()).build();
			return studentRepository.save(student);
		}).orElseGet(() -> {
			return studentRepository.save(newStudent);
		});
	}

	@DeleteMapping("/students/{id}")
	void deleteStudent(@PathVariable Long id) {
		studentRepository.deleteById(id);
	}
}
