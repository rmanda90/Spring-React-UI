package com.mpk.samples.SpringReactUI.repository;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.mpk.samples.SpringReactUI.entity.Student;

@SpringBootTest
//@DataJpaTest
class StudentRepositoryTest {
	
	private Logger _logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	StudentRepository studentRepository;

//	@Test
//	void saveStundet() {
//		studentRepository
//				.save(Student.builder().firstName("Mahesh").lastName("Varma").emailId("mvarma@xyz.com").build());
//	}
//
//	@Test
//	void findAll() {
//		List<Student> studentList = studentRepository.findAll();
//		_logger.info("{}", studentList);
//	}
//	
//	@Test
//	void findByFristName() {
//		_logger.info("{}", studentRepository.findByFirstName("Raja"));
//	}
//	
//	@Test
//	void findByFristNameContains() {
//		_logger.info("{}", studentRepository.findByFirstNameContaining("R"));
//	}
//	
//	@Test
//	void findByFristNameAndLastName() {
//		_logger.info("And : {}", studentRepository.findByFirstNameAndLastName("Raja","Sekhar"));
//	}

}
