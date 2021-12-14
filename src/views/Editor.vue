<template>
  <div class="editor-wrapper">
    <input
      class="input-field post-title"
      type="text"
      placeholder="Blog post title"
      v-model="currentPost.title"
    />

    <input
      class="input-field post-title"
      type="text"
      placeholder="Cover image url"
      v-model="currentPost.imgUrl"
    />

    <ckeditor
      :editor="editor"
      v-model="currentPost.content"
      :config="editorConfig"
      @input="setCurrentPostContent"
    ></ckeditor>
  </div>
</template>

<style lang="scss"> // can't use scoped for editor styles
  .editor-wrapper {
    .input-field {
      border: 1px solid lightgray;
      border-radius: 3px;
      margin-bottom: 10px;
      outline: none;
      padding: 7px;
      width: 100%;

      &:focus {
        box-shadow: inset 0 0 5px $shadowLight;
      }
    }

    .ck-content {
      height: calc(100vh - 260px);
      min-height: 200px;
    }
  }
</style>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Editor',
  computed: mapGetters([
    'currentPost'
  ]),
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
          toolbar: [
            'heading', '|',
            'bold', 'italic', '|',
            'link', '|',
            'bulletedList', 'numberedList', '|',
            'insertTable', '|',
            'blockQuote', '|',
            'undo', 'redo'
        ],
      },
      test: 'WOOYAH'
    }
  },
  methods: mapActions([
    'setCurrentPostContent'
  ]),
  mounted() {
    console.log('!!! editor:')
    console.log(this.editor);
    // this.editor.ui.view.height = '500px';
  }
}

</script>
