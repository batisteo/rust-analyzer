(function() {var implementors = {};
implementors["base_db"] = [{"text":"impl PartialOrd&lt;SourceRootId&gt; for SourceRootId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;CrateId&gt; for CrateId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Edition&gt; for Edition","synthetic":false,"types":[]}];
implementors["cfg"] = [{"text":"impl PartialOrd&lt;CfgAtom&gt; for CfgAtom","synthetic":false,"types":[]}];
implementors["completion"] = [{"text":"impl PartialOrd&lt;CompletionScore&gt; for CompletionScore","synthetic":false,"types":[]}];
implementors["hir_def"] = [{"text":"impl PartialOrd&lt;ModPath&gt; for ModPath","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PathKind&gt; for PathKind","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructId&gt; for StructId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;UnionId&gt; for UnionId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EnumId&gt; for EnumId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ImplId&gt; for ImplId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BlockId&gt; for BlockId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AdtId&gt; for AdtId","synthetic":false,"types":[]}];
implementors["hir_expand"] = [{"text":"impl PartialOrd&lt;Name&gt; for Name","synthetic":false,"types":[]}];
implementors["hir_ty"] = [{"text":"impl PartialOrd&lt;InternedCallableDefId&gt; for InternedCallableDefId","synthetic":false,"types":[]}];
implementors["ide"] = [{"text":"impl PartialOrd&lt;Highlight&gt; for Highlight","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HlMods&gt; for HlMods","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HlTag&gt; for HlTag","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HlMod&gt; for HlMod","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HlPunct&gt; for HlPunct","synthetic":false,"types":[]}];
implementors["ide_db"] = [{"text":"impl PartialOrd&lt;SymbolKind&gt; for SymbolKind","synthetic":false,"types":[]}];
implementors["la_arena"] = [{"text":"impl&lt;IDX:&nbsp;PartialOrd, V:&nbsp;PartialOrd&gt; PartialOrd&lt;ArenaMap&lt;IDX, V&gt;&gt; for ArenaMap&lt;IDX, V&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RawIdx&gt; for RawIdx","synthetic":false,"types":[]}];
implementors["parser"] = [{"text":"impl PartialOrd&lt;SyntaxKind&gt; for SyntaxKind","synthetic":false,"types":[]}];
implementors["paths"] = [{"text":"impl PartialOrd&lt;AbsPathBuf&gt; for AbsPathBuf","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AbsPath&gt; for AbsPath","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RelPathBuf&gt; for RelPathBuf","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RelPath&gt; for RelPath","synthetic":false,"types":[]}];
implementors["profile"] = [{"text":"impl PartialOrd&lt;Bytes&gt; for Bytes","synthetic":false,"types":[]}];
implementors["project_model"] = [{"text":"impl PartialOrd&lt;ProjectManifest&gt; for ProjectManifest","synthetic":false,"types":[]}];
implementors["syntax"] = [{"text":"impl PartialOrd&lt;Token&gt; for Token","synthetic":false,"types":[]}];
implementors["vfs"] = [{"text":"impl PartialOrd&lt;VfsPath&gt; for VfsPath","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FileId&gt; for FileId","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()