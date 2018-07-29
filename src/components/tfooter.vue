<template>
	<div class="footer">
		<span>written by: {{author}}</span>
	</div>
</template>

<script>
export default {
  data () {
  	return {
  		author: 'X'
  	}
  }
}
</script>

<style scoped>
.footer {
	text-align: center;
	margin-top: 40px;
	color: #E43BF9;
	font-size: 14px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>
