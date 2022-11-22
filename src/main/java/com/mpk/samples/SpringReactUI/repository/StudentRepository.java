package com.mpk.samples.SpringReactUI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mpk.samples.SpringReactUI.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
	
	List<Student> findByFirstName(String firstName);
	
	List<Student> findByFirstNameContaining(String firstName);
	
	List<Student> findByFirstNameNotNull();
	
	Student findByFirstNameAndLastName(String firstName, String lastName);

}
