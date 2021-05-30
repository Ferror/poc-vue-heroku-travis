<template>
    <div>
        <h1>Services</h1>
    </div>
</template>

<script>
import HealthClient from "@/clients/HealthClient";

HealthClient.getStatus();

export default {
    name: 'Services',
    props: {}
}
</script>
