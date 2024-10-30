import * as yup from 'yup';

const userSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required').min(3, 'Full name must be at least 3 characters'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  userType: yup.string().required('User type is required'),
  bio: yup.string().max(150, 'Bio can only be 150 characters'),
  profilePicture: yup
    .mixed()
    .test('fileSize', 'File size should be less than 2MB', (value) =>
      !value || value.length === 0 || (value[0] && value[0].size <= 2000000)
    )
    .test('fileType', 'Only jpg/jpeg/png formats are allowed', (value) =>
      !value || value.length === 0 || (value[0] && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type))
    ),
});

export { userSchema};


const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup
   .string()
   .required('Password is required')
   .min(8, 'Password must be at least 8 characters'),
});

export { loginSchema };