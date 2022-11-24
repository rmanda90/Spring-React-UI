package com.mpk.samples.SpringReactUI.feign;

import com.mpk.samples.SpringReactUI.objects.Student;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "rest-app-client", url="${rest-service}")
public interface StudentsClient {

	@GetMapping("v1/students")
    List<Student> findStudents();

	@PostMapping(value = "/v1/students")
    ResponseEntity<Student> postStudent(@RequestBody Student student);

	@GetMapping("v1/students/{id}")
    ResponseEntity<Student> retrieveStudentById(@PathVariable Long id);

	@PutMapping("v1/students/{id}")
    ResponseEntity<Student> updateStudent(@RequestBody Student newStudent, @PathVariable Long id);

	@DeleteMapping("v1/students/{id}")
    ResponseEntity<Void> deleteStudent(@PathVariable Long id);

}
