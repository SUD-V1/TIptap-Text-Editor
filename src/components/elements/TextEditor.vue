<script setup>
import { ref } from "vue";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/vue-3";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import CharacterCount from "@tiptap/extension-character-count";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import History from "@tiptap/extension-history";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import FontFamily from "@tiptap/extension-font-family";
import HardBreak from "@tiptap/extension-hard-break";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { Color } from "@tiptap/extension-color";
import { Button } from "@/components/ui/button";
import { IconArrowBackUp } from "@tabler/icons-vue";
import {
  IconArrowForwardUp,
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconCode,
  IconEraser,
  IconList,
  IconListNumbers,
  IconLink,
  IconPhotoScan,
  IconBlockquote,
  IconMinus,
  IconCaretDownFilled,
  IconAlignJustified,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconHeading,
} from "@tabler/icons-vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const limit = ref(280);
const editor = useEditor({
  content: `
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, 
          there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
          <pre><code class="language-css">body {
            display: none;
            }</code></pre>
            <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though.
          Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
            <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
         <ol>
          <li>A list item</li>
          <li>And another one</li>
        </ol>
        <ol start="5">
          <li>This item starts at 5</li>
          <li>And another one</li>
          </ol>
          — Mom
        </blockquote>
      `,
  extensions: [
    Document,
    Paragraph,
    Text,
    Blockquote,
    History,
    Bold,
    BulletList,
    ListItem,
    CharacterCount.configure({
      limit: limit.value,
    }),
    Image.configure({
      inline: true,
      allowBase64: true,
    }),
    Heading.configure({
      levels: [1, 2, 3],
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    OrderedList.configure({
      itemTypeName: "listItem",
      keepMarks: true,
      keepAttributes: true,
    }),
    TaskList.configure({
      itemTypeName: "taskItem",
    }),
    TaskItem.configure({
      nested: true,
    }),
    Code,
    CodeBlock,
    TextStyle,
    Color,
    Dropcursor,
    FontFamily,
    Gapcursor,
    HardBreak,
    Italic,
    Underline,
    Strike,
    HorizontalRule,
  ],
});
function addImage() {
  const url = window.prompt("URL");

  if (url) {
    editor.chain().focus().setImage({ src: url }).run();
  }
}
</script>
<template>
  <div class="flex flex-col items-center rounded-lg border">
    <div
      v-if="editor"
      class="flex items-center gap-2 bg-dark-500 text-light-100 p-2 rounded-lg"
    >
      <Button
        variant="ghost"
        size="xs"
        class="flex items-center gap-x-1"
        @click="editor.chain().undo().run()"
        :disabled="!editor.can().undo()"
      >
        <IconArrowBackUp size="1.3rem" stroke="{2}" class="cursor-pointer" />
      </Button>
      <Button
        variant="ghost"
        size="xs"
        class="flex items-center gap-x-1"
        @click="editor.chain().redo().run()"
        :disabled="!editor.can().redo()"
      >
        <IconArrowForwardUp size="1.3rem" stroke="{2}" class="cursor-pointer" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="xs" class="flex items-center gap-x-1">
            <IconHeading size="1rem" stroke="{2}" />
            <IconCaretDownFilled size="1rem" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            @click="editor.chain().toggleHeading({ level: 1 }).run()"
          >
            <span>Heading 1</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().toggleHeading({ level: 2 }).run()"
          >
            <span>Heading 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().toggleHeading({ level: 3 }).run()"
          >
            <span>Heading 3</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().toggleHeading({ level: 4 }).run()"
          >
            <span>Heading 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().toggleHeading({ level: 5 }).run()"
          >
            <span>Heading 5</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().toggleHeading({ level: 6 }).run()"
          >
            <span>Heading 6</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
          ><IconAlignJustified size="1.3rem" stroke="{2}" />
          <IconCaretDownFilled size="1rem"
        /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem @click="editor.chain().setTextAlign('left').run()"
            >Align Left</DropdownMenuItem
          >
          <DropdownMenuItem @click="editor.chain().setTextAlign('center').run()"
            >Align Center</DropdownMenuItem
          >
          <DropdownMenuItem @click="editor.chain().setTextAlign('right').run()"
            >Align Right</DropdownMenuItem
          >
          <DropdownMenuItem
            @click="editor.chain().setTextAlign('justify').run()"
            >Align Justify</DropdownMenuItem
          >
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
          ><input
            class="w-6 h-6 rounded"
            type="color"
            @input="editor.chain().setColor($event.target.value).run()"
            :value="editor.getAttributes('textStyle').color" />
          <IconCaretDownFilled size="1rem"
        /></DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[38px] flex flex-wrap items-center justify-center gap-1"
        >
          <Button
            class="w-5 h-5 bg-[#958DF1] hover:bg-[#958DF1]"
            @click="editor.chain().setColor('#958DF1').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#958DF1' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#2c2299] hover:bg-[#2c2299]"
            @click="editor.chain().setColor('#2c2299').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#2c2299' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#ff3939] hover:bg-[#ff3939]"
            @click="editor.chain().setColor('#ff3939').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#ff3939' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#fcc204] hover:bg-[##fcc204]"
            @click="editor.chain().setColor('#fcc204').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#fcc204' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#cccf01] hover:bg-[#cccf01]"
            @click="editor.chain().setColor('#cccf01').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#cccf01' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#17e404] hover:bg-[#17e404]"
            @click="editor.chain().setColor('#17e404').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#17e404' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#03a2d3] hover:bg-[#03a2d3]"
            @click="editor.chain().setColor('#03a2d3').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#03a2d3' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#ca05e4] hover:bg-[#ca05e4]"
            @click="editor.chain().setColor('#ca05e4').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#ca05e4' }),
            }"
          >
          </Button>
          <Button
            class="w-5 h-5 bg-[#fa00a7] hover:bg-[#fa00a7]"
            @click="editor.chain().setColor('#fa00a7').run()"
            :class="{
              'is-active': editor.isActive('textStyle', { color: '#fa00a7' }),
            }"
          >
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
          >Font <IconCaretDownFilled size="1rem"
        /></DropdownMenuTrigger>
        <DropdownMenuContent class="flex flex-col justify-start">
          <DropdownMenuItem
            @click="editor.chain().setFontFamily('Inter').run()"
            :class="{
              'is-active': editor.isActive('textStyle', {
                fontFamily: 'Inter',
              }),
            }"
          >
            Inter
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="
              editor.chain().setFontFamily('Comic Sans MS, Comic Sans').run()
            "
            :class="{
              'is-active': editor.isActive('textStyle', {
                fontFamily: 'Comic Sans MS, Comic Sans',
              }),
            }"
          >
            Comic Sans
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().setFontFamily('serif').run()"
            :class="{
              'is-active': editor.isActive('textStyle', {
                fontFamily: 'serif',
              }),
            }"
          >
            serif
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().setFontFamily('monospace').run()"
            :class="{
              'is-active': editor.isActive('textStyle', {
                fontFamily: 'monospace',
              }),
            }"
          >
            monospace
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="editor.chain().setFontFamily('cursive').run()"
            :class="{
              'is-active': editor.isActive('textStyle', {
                fontFamily: 'cursive',
              }),
            }"
          >
            cursive
          </DropdownMenuItem>
          <DropdownMenuItem @click="editor.chain().unsetFontFamily().run()">
            unsetFontFamily
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <IconBold
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleBold().run()"
      />
      <IconItalic
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleItalic().run()"
      />
      <IconUnderline
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleUnderline().run()"
      />
      <IconStrikethrough
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleStrike().run()"
      />
      <IconCode
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleCode().run()"
      />
      <IconEraser size="1.3rem" stroke="{2}" class="cursor-pointer" />
      <IconList
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().focus().toggleTaskList().run()"
      />
      <IconCode
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleCodeBlock().run()"
      />
      <IconListNumbers
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().focus().toggleOrderedList().run()"
      />
      <IconLink size="1.3rem" stroke="{2}" class="cursor-pointer" />
      <IconPhotoScan
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="addImage"
      />
      <IconBlockquote
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().toggleBlockquote().run()"
      />
      <IconMinus
        size="1.3rem"
        stroke="{2}"
        class="cursor-pointer"
        @click="editor.chain().focus().setHorizontalRule().run()"
      />
    </div>
    <div class="w-[700px]">
      <!-- <bubble-menu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
        class="flex items-center gap-3 bg-slate-400 text-light-100 p-2 rounded-lg"
      >
        <IconArrowBackUp
          size="1.3rem"
          stroke="{2}"
          class="cursor-pointer"
          @click="editor.chain().undo().run()"
        />
        <IconArrowForwardUp
          size="1.3rem"
          stroke="{2}"
          class="cursor-pointer"
          @click="editor.chain().redo().run()"
        />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="xs" class="flex items-center gap-x-1">
              <IconHeading size="1rem" stroke="{2}" />
              <IconCaretDownFilled size="1rem" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 1 }).run()"
            >
              <span>Heading 1</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 2 }).run()"
            >
              <span>Heading 2</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 3 }).run()"
            >
              <span>Heading 3</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 4 }).run()"
            >
              <span>Heading 4</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 5 }).run()"
            >
              <span>Heading 5</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 6 }).run()"
            >
              <span>Heading 6</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
            ><IconAlignJustified size="1.3rem" stroke="{2}" />
            <IconCaretDownFilled size="1rem"
          /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="editor.chain().setTextAlign('left').run()"
              >Align Left</DropdownMenuItem
            >
            <DropdownMenuItem
              @click="editor.chain().setTextAlign('center').run()"
              >Align Center</DropdownMenuItem
            >
            <DropdownMenuItem
              @click="editor.chain().setTextAlign('right').run()"
              >Align Right</DropdownMenuItem
            >
            <DropdownMenuItem
              @click="editor.chain().setTextAlign('justify').run()"
              >Align Justify</DropdownMenuItem
            >
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
            ><input
              class="w-6 h-6 rounded"
              type="color"
              @input="editor.chain().setColor($event.target.value).run()"
              :value="editor.getAttributes('textStyle').color" />
            <IconCaretDownFilled size="1rem"
          /></DropdownMenuTrigger>
          <DropdownMenuContent
            class="w-[38px] flex flex-wrap items-center justify-center gap-1"
          >
            <Button
              class="w-5 h-5 bg-[#958DF1] hover:bg-[#958DF1]"
              @click="editor.chain().setColor('#958DF1').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#958DF1' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#2c2299] hover:bg-[#2c2299]"
              @click="editor.chain().setColor('#2c2299').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#2c2299' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#ff3939] hover:bg-[#ff3939]"
              @click="editor.chain().setColor('#ff3939').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#ff3939' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#fcc204] hover:bg-[##fcc204]"
              @click="editor.chain().setColor('#fcc204').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#fcc204' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#cccf01] hover:bg-[#cccf01]"
              @click="editor.chain().setColor('#cccf01').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#cccf01' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#17e404] hover:bg-[#17e404]"
              @click="editor.chain().setColor('#17e404').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#17e404' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#03a2d3] hover:bg-[#03a2d3]"
              @click="editor.chain().setColor('#03a2d3').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#03a2d3' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#ca05e4] hover:bg-[#ca05e4]"
              @click="editor.chain().setColor('#ca05e4').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#ca05e4' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#fa00a7] hover:bg-[#fa00a7]"
              @click="editor.chain().setColor('#fa00a7').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#fa00a7' }),
              }"
            >
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
            >Font <IconCaretDownFilled size="1rem"
          /></DropdownMenuTrigger>
          <DropdownMenuContent class="flex flex-col justify-start">
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('Inter').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'Inter',
                }),
              }"
            >
              Inter
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="
                editor.chain().setFontFamily('Comic Sans MS, Comic Sans').run()
              "
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'Comic Sans MS, Comic Sans',
                }),
              }"
            >
              Comic Sans
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('serif').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'serif',
                }),
              }"
            >
              serif
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('monospace').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'monospace',
                }),
              }"
            >
              monospace
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('cursive').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'cursive',
                }),
              }"
            >
              cursive
            </DropdownMenuItem>
            <DropdownMenuItem @click="editor.chain().unsetFontFamily().run()">
              unsetFontFamily
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <IconBold
          size="1.3rem"
          stroke="{2}"
          class="cursor-pointer"
          @click="editor.chain().toggleBold().run()"
        />
      </bubble-menu> -->
      <bubble-menu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
        class="flex items-center flex-col bg-dark-400 text-light-100 p-4 border rounded-lg w-[250px]"
      >
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().undo().run()"
        >
          Undo
          <IconArrowBackUp size="1.3rem" stroke="{2}" class="cursor-pointer" />
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().redo().run()"
        >
          Redo
          <IconArrowForwardUp
            size="1.3rem"
            stroke="{2}"
            class="cursor-pointer"
          />
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleHeading({ level: 1 }).run()"
        >
          <span>Heading 1</span>
          H1
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleHeading({ level: 2 }).run()"
        >
          <span>Heading 2</span>
          H2
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleHeading({ level: 3 }).run()"
        >
          <span>Heading 3</span>
          H3
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleHeading({ level: 4 }).run()"
        >
          <span>Heading 4</span>
          H4
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleHeading({ level: 5 }).run()"
        >
          <span>Heading 5</span>
          H5
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleHeading({ level: 6 }).run()"
        >
          <span>Heading 6</span>
          H6
        </div>
        <div
          class="flex items-center justify-between w-full cursor-pointer hover:bg-dark-300 p-1 rounded"
          @click="editor.chain().toggleBold().run()"
        >
          Bold
          <IconBold size="1.3rem" stroke="{2}" class="cursor-pointer" />
        </div>
      </bubble-menu>
      <floating-menu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
        class="flex items-center gap-3 bg-slate-400 text-light-100 p-2 rounded-lg"
      >
        <IconArrowBackUp
          size="1.3rem"
          stroke="{2}"
          class="cursor-pointer"
          @click="editor.chain().undo().run()"
        />
        <IconArrowForwardUp
          size="1.3rem"
          stroke="{2}"
          class="cursor-pointer"
          @click="editor.chain().redo().run()"
        />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="xs" class="flex items-center gap-x-1">
              <IconHeading size="1rem" stroke="{2}" />
              <IconCaretDownFilled size="1rem" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 1 }).run()"
            >
              <span>Heading 1</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 2 }).run()"
            >
              <span>Heading 2</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 3 }).run()"
            >
              <span>Heading 3</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 4 }).run()"
            >
              <span>Heading 4</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 5 }).run()"
            >
              <span>Heading 5</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().toggleHeading({ level: 6 }).run()"
            >
              <span>Heading 6</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
            ><IconAlignJustified size="1.3rem" stroke="{2}" />
            <IconCaretDownFilled size="1rem"
          /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="editor.chain().setTextAlign('left').run()"
              >Align Left</DropdownMenuItem
            >
            <DropdownMenuItem
              @click="editor.chain().setTextAlign('center').run()"
              >Align Center</DropdownMenuItem
            >
            <DropdownMenuItem
              @click="editor.chain().setTextAlign('right').run()"
              >Align Right</DropdownMenuItem
            >
            <DropdownMenuItem
              @click="editor.chain().setTextAlign('justify').run()"
              >Align Justify</DropdownMenuItem
            >
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
            ><input
              class="w-6 h-6 rounded"
              type="color"
              @input="editor.chain().setColor($event.target.value).run()"
              :value="editor.getAttributes('textStyle').color" />
            <IconCaretDownFilled size="1rem"
          /></DropdownMenuTrigger>
          <DropdownMenuContent
            class="w-[38px] flex flex-wrap items-center justify-center gap-1"
          >
            <Button
              class="w-5 h-5 bg-[#958DF1] hover:bg-[#958DF1]"
              @click="editor.chain().setColor('#958DF1').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#958DF1' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#2c2299] hover:bg-[#2c2299]"
              @click="editor.chain().setColor('#2c2299').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#2c2299' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#ff3939] hover:bg-[#ff3939]"
              @click="editor.chain().setColor('#ff3939').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#ff3939' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#fcc204] hover:bg-[##fcc204]"
              @click="editor.chain().setColor('#fcc204').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#fcc204' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#cccf01] hover:bg-[#cccf01]"
              @click="editor.chain().setColor('#cccf01').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#cccf01' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#17e404] hover:bg-[#17e404]"
              @click="editor.chain().setColor('#17e404').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#17e404' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#03a2d3] hover:bg-[#03a2d3]"
              @click="editor.chain().setColor('#03a2d3').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#03a2d3' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#ca05e4] hover:bg-[#ca05e4]"
              @click="editor.chain().setColor('#ca05e4').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#ca05e4' }),
              }"
            >
            </Button>
            <Button
              class="w-5 h-5 bg-[#fa00a7] hover:bg-[#fa00a7]"
              @click="editor.chain().setColor('#fa00a7').run()"
              :class="{
                'is-active': editor.isActive('textStyle', { color: '#fa00a7' }),
              }"
            >
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-x-2 cursor-pointer"
            >Font <IconCaretDownFilled size="1rem"
          /></DropdownMenuTrigger>
          <DropdownMenuContent class="flex flex-col justify-start">
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('Inter').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'Inter',
                }),
              }"
            >
              Inter
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="
                editor.chain().setFontFamily('Comic Sans MS, Comic Sans').run()
              "
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'Comic Sans MS, Comic Sans',
                }),
              }"
            >
              Comic Sans
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('serif').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'serif',
                }),
              }"
            >
              serif
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('monospace').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'monospace',
                }),
              }"
            >
              monospace
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().setFontFamily('cursive').run()"
              :class="{
                'is-active': editor.isActive('textStyle', {
                  fontFamily: 'cursive',
                }),
              }"
            >
              cursive
            </DropdownMenuItem>
            <DropdownMenuItem @click="editor.chain().unsetFontFamily().run()">
              unsetFontFamily
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <IconBold
          size="1.3rem"
          stroke="{2}"
          class="cursor-pointer"
          @click="editor.chain().toggleBold().run()"
        />
      </floating-menu>
      <editor-content :editor="editor" class="px-2 py-4" />
      <div class="character-count" v-if="editor">
        {{ editor.storage.characterCount.characters() }}/{{ limit }} characters
        <br />
        {{ editor.storage.characterCount.words() }} words
      </div>
    </div>
  </div>
</template>

<style>
/* Basic editor styles */
.ProseMirror:focus {
  outline: none;
}
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 3px solid rgba(#efefef, 0.1);
  }
  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
  .character-count {
    margin-top: 1rem;
    color: #868e96;
  }
  hr.ProseMirror-selectednode {
    border-top: 1px solid #68cef8;
  }
  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    p {
      margin: 0;
    }

    li {
      display: flex;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }

      ul li,
      ol li {
        display: list-item;
      }

      ul[data-type="taskList"] > li {
        display: flex;
      }
    }
  }
}
</style>
