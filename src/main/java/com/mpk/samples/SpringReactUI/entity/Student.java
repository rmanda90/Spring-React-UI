package com.mpk.samples.SpringReactUI.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(uniqueConstraints = @UniqueConstraint(name = "emailid_unique", columnNames = "emailId"))
public class Student {

	@Id
	@SequenceGenerator(name = "studentid_sequence", sequenceName = "studentid_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "studentid_sequence")
	private Long studentId;

	@Size(max = 35, message = "Firt Nmae should not be Grater than 35 charecters")
	@NotBlank(message = "First Name is Required")
	private String firstName;

	@Size(max = 35, message = "Last Nmae should not be Grater than 35 charecters")
	@NotBlank(message = "Last Name is Required")
	private String lastName;

	@Column(nullable = false)
	private String emailId;

}
