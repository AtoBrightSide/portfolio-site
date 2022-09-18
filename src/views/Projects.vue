<template>
    <section class="container mx-auto">
        <div class="text-4xl text-white text-center bg-gray-700">
            Some Passion Projects
        </div>
        <div class="flex flex-col md:grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-3">
            <ProjectCard />
            <div class="bg-indigo-600">2</div>
            <div class="bg-indigo-600">3</div>
            <div class="bg-indigo-600">4</div>
            <div class="bg-indigo-600">5</div>
        </div>
    </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
    export default {
    name: "Projects",
    components: { ProjectCard }
}
</script>