import { Trash, X } from "lucide-react";
import "./DeleteModal.css";

function DeleteModal({ product, onConfirm, onCancel }) {
  if (!product) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="delete-modal">

        {/* Close button */}
        <button
          className="modal-close"
          onClick={onCancel}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Warning icon */}
        <div className="warning-icon">
          <Trash size={28} />
        </div>

        <h2>Delete Product?</h2>

        <p>
          Are you sure you want to delete{" "}
          <strong>{product.name}</strong>?
        </p>

        <p className="modal-warning">
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="modal-actions">
          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-delete-btn"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteModal;