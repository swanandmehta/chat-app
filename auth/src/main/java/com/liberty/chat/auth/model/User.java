/**
 * 
 */
package com.liberty.chat.auth.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author Swanand
 *
 */
@Entity
@Table(name = "User")
public class User implements IModel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", insertable = false, updatable = false, unique = true)
	private Long id;
	
	@Column(name = "username", insertable = true, updatable = false, unique = true)
	private String username;
	
	@Column(name = "hash", insertable = true, updatable = true, unique = false)
	private String hash;
	
	@OneToMany(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", insertable = false, updatable = false, nullable = true)
	private List<UserRole> roles;
	
}
