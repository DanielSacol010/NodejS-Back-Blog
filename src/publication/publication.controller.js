import Publication from "./publication.model.js"

export const createPublication = async (req, res) => {
    try {
        const data = req.body;
        const publication = await Publication.create(data);
        return res.status(201).json({
            message: "Publication has been created",
            publication: publication
        });
    } catch (err) {
        return res.status(500).json({
            message: "Publication creation failed",
            error: err.message
        });
    }
};

export const getPublications = async (req, res) => {
    try {
        const { course } = req.query;
        let filter = {};
        if (course) {
            filter.course = course;
        }
        const publications = await Publication.find(filter);
        return res.status(200).json({ publications });
    } catch (err) {
        return res.status(500).json({
            message: "Failed to get publications",
            error: err.message
        });
    }
};
export const getPublicationById = async (req, res) => {
    try {
        const { pid } = req.params;
        const publication = await Publication.findById(pid)
            .populate({
                path: 'comments',
                options: { sort: { createdAt: -1 } }
            });
        if (!publication) {
            return res.status(404).json({
                message: "Publication not found"
            });
        }
        return res.status(200).json({ publication });
    } catch (err) {
        return res.status(500).json({
            message: "Failed to get publication",
            error: err.message
        });
    }
};

export const updatePublication = async (req, res) => {
    try {
        const { pid } = req.params;
        const data = req.body;
        const publication = await Publication.findByIdAndUpdate(pid, data, { new: true });
        if (!publication) {
            return res.status(404).json({
                message: "Publication not found"
            });
        }
        return res.status(200).json({
            message: "Publication has been updated",
            publication
        });
    } catch (err) {
        return res.status(500).json({
            message: "Publication update failed",
            error: err.message
        });
    }
};

export const deletePublication = async (req, res) => {
    try {
        const { pid } = req.params;
        const publication = await Publication.findByIdAndDelete(pid);
        if (!publication) {
            return res.status(404).json({
                message: "Publication not found"
            });
        }
        return res.status(200).json({
            message: "Publication has been deleted"
        });
    } catch (err) {
        return res.status(500).json({
            message: "Publication deletion failed",
            error: err.message
        });
    }
};


