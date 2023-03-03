let books=[];
function addBook(){
    const bookTitle=document.getElementById("book-title").value;
    const bookAuthor=document.getElementById("book-author").value;
    const bookId=document.getElementById("book-id").value;
    const bookIssueDate=document.getElementById("book-issue-date").value;
    const bookReturnDate=document.getElementById("book-return-date").value;

    const book={
        title:bookTitle,
        author:bookAuthor,
        id:bookId,
        issueDate:new Date(bookIssueDate),
        returnDate:new Date(bookReturnDate),
        memberId:document.getElementById("member-id").value,
        memberName:document.getElementById("member-name").value,
    };
    books.push(book);

    if(book.returnDate<new Date())
    {
        const pendingBooksList=document.getElementById("pending-books");
        const booklistItem=document.createElement("li");
        booklistItem.innerHTML=`${book.title} by ${book.author},issued to ${book.memberName} (ID: ${book.memberId}) is pending`;
        pendingBooksList.appendChild(booklistItem);
    }


}
