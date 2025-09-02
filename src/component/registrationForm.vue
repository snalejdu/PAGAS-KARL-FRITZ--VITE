<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-lg p-4" style="width: 28rem;">
      <h2 class="mb-4 text-primary text-center">Registration Form</h2>

      <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
        <!-- Name -->
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="formData.name"
            placeholder="Please enter your Full Name"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="formData.email"
            placeholder="Please enter your email address"
            required
          />
        </div>

        <!-- Gender -->
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <select v-model="formData.gender" class="form-select" required>
            <option disabled value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <!-- Terms -->
        <div class="form-check mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="terms"
            v-model="formData.agree"
          />
          <label class="form-check-label" for="terms">
            I agree to the terms.
          </label>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>

      <!-- Success Message -->
      <div v-if="submitted" class="alert alert-success mt-4">
        <h5 class="mb-2">Form Submitted!</h5>
        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Gender:</strong> {{ formData.gender }}</p>
        <p><strong>Agreed:</strong> {{ formData.agree ? 'Yes' : 'No' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

// form data
const formData = reactive({
  name: "",
  email: "",
  gender: "",
  agree: false,
});

// submission flag
const submitted = ref(false);

// handle submit
function handleSubmit() {
  if (!formData.name || !formData.email || !formData.gender) {
    alert("Please fill out all required fields");
    return;
  }
  submitted.value = true;
}
</script>
