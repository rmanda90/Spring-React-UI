package com.mpk.samples.SpringReactUI.controller;

import com.mpk.samples.SpringReactUI.feign.StudentsClient;
import com.mpk.samples.SpringReactUI.objects.Student;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@Slf4j
public class StudentController {

	private final StudentsClient studentsClient;

	@GetMapping("/students")
	public List<Student> findStudents() {
		return studentsClient.findStudents();
	}

	@PostMapping("/students")
	public Student newStudent(@RequestBody Student student) {
		return studentsClient.postStudent(student).getBody();
	}

	@GetMapping("/students/{id}")
	public Student findById(@PathVariable Integer id) {
		return studentsClient.retrieveStudentById(id).getBody();
	}

	@PutMapping("/students/{id}")
	Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
		return studentsClient.updateStudent(newStudent, id).getBody();
	}

	@DeleteMapping("/students/{id}")
	void deleteStudent(@PathVariable Long id) {
		studentsClient.deleteStudent(id);
	}
}
