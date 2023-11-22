<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div v-show=" modalActive "
				class="absolute w-screen bg-black bg-opacity-50 h-screen top-0 left-0 flex justify-center px-8">
				<Transition name="modal-inner">
					<div v-if=" modalActive " class="p-4 bg-white self-start mt-12 max-w-xs md:max-w-lg">
						<slot>
							<!-- Default content goes here if no specific content is provided -->
							<p>This is the default content.</p>
						</slot>

						<button @click="$emit( 'close-modal' )"
							class="px-2 py-1 bg-[#ff6a6a] text-white text-[13px] rounded-[5px]">
							Cancel
						</button>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
defineEmits( [ "close-modal" ] )
defineProps( {
	modalActive: {
		type: Boolean,
		default: false,
	},
} )
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.modal-inner-enter-active,
.modal-inner-leave-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
	opacity: 0;
	transform: scale(0.8);
}

.modal-inner-leave-to {
	transform: scale(0.8);
}
</style>
