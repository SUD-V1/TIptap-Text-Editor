<script>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
</script>
<template>
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
</template>
